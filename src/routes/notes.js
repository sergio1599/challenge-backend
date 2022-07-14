const { Router } = require('express');
const { findNotes, findOnlyNote, createNote, deleteNote, updateNote, changeNotesToArchived, changeNotesToUnarchived, findNotesCategory, findNotesArchived } = require('../controller/notes');
const router = Router();

router.get('/', findNotes);
router.get('/:id', findOnlyNote);
router.post('/create-note', createNote);
router.delete('/delete-note/:id', deleteNote);
router.patch('/update-note/:id', updateNote);
router.patch('/change-archived/:id', changeNotesToArchived);
router.patch('/change-unarchived/:id', changeNotesToUnarchived);
router.get('/data/category', findNotesCategory);
router.get('/data/archived', findNotesArchived);




module.exports = router; 