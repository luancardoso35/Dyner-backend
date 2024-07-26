import axios from "axios"

type VenueData = {
    lat: number,
    lng: number,
    searchQuery: string
}

class GetVenueService {
    async execute( {lat, lng, searchQuery}: VenueData ) {
        const response = await axios.get('https://api.foursquare.com/v2/search/autocomplete', { params: {
            v: '20240707',
            ll: `${lat},${lng}`,
            radius: '8000',
            categoryId: '13000',
            oauth_token: process.env.FOURSQUAREAPITOKEN,
            limit: 20,
            query: searchQuery,
        }})
        return response
    }
}

export { GetVenueService }