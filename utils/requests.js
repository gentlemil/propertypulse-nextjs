const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

// fetch all property
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

// fetch single property
async function fetchProperty(id) {
  try {
    if (!apiDomain) {
      return null
    }
    const res = await fetch(`${apiDomain}/properties/${id}`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return await res.json()
  } catch (error) {
    console.log(error)
    return null
  }
}

export { fetchProperties, fetchProperty }
