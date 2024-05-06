const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

async function fetchProperties() {
  try {
    // handle the case where the API domain is not set yet
    if (!apiDomain) {
      return []
    }
    const res = await fetch(`${apiDomain}/properties`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return await res.json()
  } catch (error) {
    console.log(error)
    return []
  }
}

export { fetchProperties }
