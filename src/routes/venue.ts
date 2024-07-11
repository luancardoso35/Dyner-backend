import axios from "axios";
import { Request, Response } from "express";

var express = require('express');
const venueRouter = express.Router();

async function getVenueFromFoursquare(lat: number, lng: number, searchQuery: string) {
    const res = await axios.get('https://api.foursquare.com/v2/search/autocomplete', { params: {
        v: '20240707',
        ll: `${lat},${lng}`,
        radius: '8000',
        categoryId: '13000',
        oauth_token: process.env.foursquareApiToken,
        limit: 20,
        query: searchQuery,
    }})
    return res.data
}

venueRouter.get('/', async(req: Request, res: Response) => {
    if (Object.keys(req.query).length !== 3) {
        res.statusMessage = "Bad request";
        res.status(400).end();
    } else {
        const lat = parseFloat(req.query.lat as string)
        const lng = parseFloat(req.query.lng as string)
        const searchQuery = (req.query.query as string)
        const data = await getVenueFromFoursquare(lat, lng, searchQuery);
        res.status(200).json({ success: true, data })
    }
    
})

module.exports = venueRouter;