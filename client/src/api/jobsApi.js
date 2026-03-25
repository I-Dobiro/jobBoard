// Add Job
const API_URL = '/api/jobs';

export const getJobs = async () => {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error('Failed to fetch jobs');
    }

    return (await res.json()).data;
};

export const getJob = async (id) => {
    const res = await fetch(`${API_URL}/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch job');
    }

    return (await res.json()).data;
};

export const addJob = async (newJob) => {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob)
        });

        if (!res.ok) {
            throw new Error('Failed to add job');
        }

        return (await res.json()).data;

    } catch (error) {
        console.error('Error adding job:', error);
        throw error;
    }
};


// Delete Job
export const deleteJob = async (id) => {
    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!res.ok) {
            throw new Error('Failed to delete job');
        }

    } catch (error) {
        console.error('Error deleting job:', error);
        throw error;
    }
};


// Update Job
export const updateJob = async (job) => {
    try {
        const res = await fetch(`${API_URL}/${job.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(job)
        });

        if (!res.ok) {
            throw new Error('Failed to update job');
        }

        return (await res.json()).data;

    } catch (error) {
        console.error('Error updating job:', error);
        throw error;
    }
};