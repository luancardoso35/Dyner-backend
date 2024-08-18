import axios from "axios";
import { Request, Response } from "express";

var express = require('express');
const venuesRouter = express.Router();

async function getVenuesFromFoursquare(lat: number, lng: number, offset: number, searchQuery: string) {
    const res = await axios.get('https://api.foursquare.com/v2/venues/search', { params: {
        v: '20240707',
        ll: `${lat},${lng}`,
        radius: '8000',
        categoryId: '13000',
        oauth_token: process.env.FOURSQUAREAPITOKEN,
        limit: 18,
        offset: 18*offset,
        ...(searchQuery !== '' && {query: searchQuery}),
    }})
    console.log(res.data)
    return res.data
}

venuesRouter.get('/', async(req: Request, res: Response) => {
    if (Object.keys(req.query).length !== 3 && Object.keys(req.query).length !== 4) {
        res.statusMessage = "Bad request";
        res.status(400).end();
    } else {
        const lat = parseFloat(req.query.lat as string)
        const lng = parseFloat(req.query.lng as string)
        const offset = parseInt(req.query.offset as string)
        const searchQuery = (req.query.searchQuery as string)
        const data = await getVenuesFromFoursquare(lat, lng, offset, searchQuery);
        res.status(200).json({ success: true, data })
    }  
})

module.exports = venuesRouter;