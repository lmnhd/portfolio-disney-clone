export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const term = searchParams.get('term')

    if(!term) return null

    const res = await fetch(`https://disney-clone-openai.azurewebsites.net/api/getaisuggestion?term=${term}`,{
        method: "GET",
        next: {
            revalidate: 60 * 60 * 24 // 24 hours
        }
    })

    const message = await res.text()

    //console.log("getAISuggestions message =>", message)

    return Response.json( { message })
    
}