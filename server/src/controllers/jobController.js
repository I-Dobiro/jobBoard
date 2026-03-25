import { sql } from "../db/index.js";

export const getAllJobs = async (req, res) => {
    try {
        const allJobs = await sql`
        SELECT * FROM jobs
        ORDER BY created_at DESC
        `
        console.log("fetched jobs", allJobs)
        res.status(200).json({ success: true, data: allJobs })
    } catch (error) {
        console.error("Error fetching jobs:", error.message);
        res.status(500).json({ success: false, message: "Failed to fetch jobs" });
    }
};

export const createJob = async (req, res) => {
    const {
        title,
        type,
        description,
        location,
        salary,
        company
    } = req.body;

    if (!title || !type || !description || !location || !salary || !company || !company.name || !company.description || !company.contactEmail || !company.contactPhone) {
        return res.status(400).json({ success: false, message: "all fields are required" })
    }
    try {
        const newJob = await sql`
        INSERT INTO jobs (title, type, description, location, salary, company_name, company_description, contact_email, contact_phone)
        VALUES (${title}, ${type}, ${description}, ${location}, ${salary}, ${company.name}, ${company.description}, ${company.contactEmail}, ${company.contactPhone})
        RETURNING *
        `
        console.log("new job added", newJob);
        res.status(201).json({ success: true, data: newJob[0] })
    } catch (error) {
        console.log("Error creating job: ", error.message)
        res.status(500).json({ success: false, message: "Failed to create job" });
    }
};

export const getJob = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await sql`
        SELECT * FROM jobs WHERE id=${id}
        `;
        if (job.length === 0) {
            return res.status(404).json({ success: false, message: "Job not found" });
        }
        res.status(200).json({ success: true, data: job[0] })
    } catch (error) {
        console.log("Error fetching job")
        res.status(500).json({ success: false, message: "Failed to fetch job" });
    }
};
export const updateJob = async (req, res) => {
    const { id } = req.params;
    const {
        title,
        type,
        description,
        location,
        salary,
        company
    } = req.body;
    try {
        const updated = await sql`
        UPDATE jobs 
        SET title = ${title}, type = ${type}, description = ${description}, location = ${location}, salary = ${salary},
        company_name = ${company.name}, company_description = ${company.description}, contact_email = ${company.contactEmail}, contact_phone = ${company.contactPhone}
        WHERE id=${id}
        RETURNING *
        `
        if (!title || !type || !description || !location || !salary || !company) {
            return res.status(400).json({ success: false, message: "Missing fields" });
        }
        if (updated.length === 0) {
            return res.status(404).json({ success: false, message: 'Job not found' })
        }
        res.status(200).json({ success: true, data: updated[0] })
    } catch (error) {
        console.log("Error updating job", error.message)
        res.status(500).json({ success: false, message: "Failed to update job" });
    }
};

export const deleteJob = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await sql`
            DELETE FROM jobs
            WHERE id = ${id}
            RETURNING *
        `;

        if (deleted.length === 0) {
            return res.status(404).json({ success: false, message: "Job not found" });
        }

        console.log("Deleted job", deleted[0]);
        res.status(200).json({ success: true, data: deleted[0] });
    } catch (error) {
        console.error("Error deleting job:", error.message);
        res.status(500).json({ success: false, message: "Failed to delete job" });
    }
};
