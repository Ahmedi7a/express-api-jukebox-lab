const Track = require("../models/track.js")
const express = require('express');
const router = express.Router();


//post new track
router.post("/", async (req, res) => {
    try {
        // Create a new pet with the data from req.body
        const createdTrack = await Track.create(req.body);
        res.status(201).json(createdTrack); //insted of render
    } catch (error) {
        res.status(422).json({ error: `failed to create pet ${error}` });
    }
})

//get all trackes
router.get('/', async (req, res) => {
    try {
        const tracks = await Track.find()
        res.status(200).json(tracks); //insted of render
    } catch (error) {
        res.status(400).json({ error: `failed to get tracks ${error}` });
    }
})

//get specific track
router.get('/:id', async (req, res) => {
    try {
        const track = await Track.findById(req.params.id);
        if (!track) throw new Error("track not found");
        res.status(200).json(track); //insted of render
    } catch (error) {
        res.status(404).json({ error: `failed to get  ${error}` });
    }
})

//update track
router.put('/:id', async (req, res) => {
    try {
        const track = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!track) throw new Error("track not found");
        res.status(200).json(track); //insted of render
    } catch (error) {
        res.status(422).json({ error: `failed to update  ${error}` });
    }
})

//delete
router.delete('/:id', async (req, res) => {
    try {
        const track = await Track.findByIdAndDelete(req.params.id);
        if (!track) throw new Error("track not found");
        res.status(200).json({ message: "success" }); //insted of render
    } catch (error) {
        res.status(400).json({ error: `failed to delete  ${error}` });
    }
})









// Export the router at the bottom of the file
module.exports = router;