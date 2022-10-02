import supabaseClient from '/lib/supabase'
export default async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    // if (!body.first || !body.last) {
    //     // Sends a HTTP bad request error code
    //     return res.status(400).json({ data: 'First or last name not found' })
    // }
    const { data, error } = await supabaseClient.from("feedback").insert([
        {
            name: body.name,
            email: body.email,
            school: body.school,
            category: body.category,
            message: body.message,
        },
    ])
    if (error) {
        console.log("Error", error)
    }
    console.log(data);
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json(data)
}