import JobListing from './JobListing'
import { useState, useEffect } from 'react'



const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = `${import.meta.env.VITE_API_URL}api/jobs`;
            try {
                const res = await fetch(apiUrl);

                if (!res.ok) {
                    throw new Error('Failed to fetch jobs');
                }

                const data = await res.json();
                setJobs(data.data);


                // job limiting here
                const limitedJobs = isHome ? data.data.slice(0, 3) : data.data;

                setJobs(limitedJobs);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {loading ? (<h2>Loading...</h2>) : <>
                        {jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}</>}
                </div>
            </div>
        </section>
    )
}

export default JobListings


