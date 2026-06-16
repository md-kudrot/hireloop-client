"use server"
// const SERVER_URL = process.env.SERVER_URL
// console.log("SERVER_URL:", SERVER_URL)
export const createJob = async (newJobData) => {
    const res = await fetch(`http://localhost:5000/api/new_jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJobData)
    })
    return res.json()
}
