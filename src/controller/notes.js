const { response } = require('express');
const noteModel = require('../models/Notes');

const createNote = async (req, res) => {
    const { title, content, category } = req.body;
    try {
        await noteModel.create({
            title,
            content,
            category,
        });
        return res.status(201).json({
            succssess: true,
            message: 'La nota fue creada correctamente',
        });
    } catch (error) {
        return res.status(500).json({
            succssess: false,
            message: 'Error al crear la nota',
        });
    }
};

const findNotes = async (req, res) => {
    try {
        const notes = await noteModel.findAll();

        if (notes.length === 0)
            return res.status(204).json({
                success: false,
                message: 'No hay notas',
            });

        return res.status(200).json({
            success: true,
            data: notes
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al obtener las notas',
        });
    }

};

const findOnlyNote = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await nodeModel.findByPk(id);
        if (!note)
            return res.status(404).json({
                success: false,
                message: 'La nota no existe',
            });
        return res.status(200).json({
            success: true,
            data: note
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al obtener la nota',
        });
    }


};

const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content, category } = req.body;
    try {
        const [updateRows] = await noteModel.update({
            title,
            content,
            category,
        }, {
            where: {
                idNote: id,
            }
        });
        if (updateRows === 0)
            return res.status(404).json({
                success: false,
                message: 'La nota no existe',
            });
        return res.status(200).json({
            success: true,
            message: 'La nota fue actualizada correctamente',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al actualizar la nota',
        });
    }
}

const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await noteModel.destroy({
            where: {
                idNote: id
            }
        });
        if (result === 0)
            return res.status(404).json({
                success: false,
                message: 'La nota no existe',
            });
        return res.status(200).json({
            success: true,
            message: 'La nota fue eliminada correctamente',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al eliminar la nota',
        });
    }
};

const changeNotesToArchived = async (req, res) => {
    const { id } = req.params;
    try {
        const [updateRows] = await noteModel.update({
            isArchived: true,
        }, {
            where: {
                idNote: id,
            }
        });
        if (updateRows === 0)
            return res.status(404).json({
                success: false,
                message: 'La nota no existe',
            });
        return res.status(200).json({
            success: true,
            message: 'La nota fue archivada correctamente',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al archivar las notas archivadas',
        });
    }

};

const changeNotesToUnarchived = async (req, res) => {
    const { id } = req.params;
    try {
        const [updateRows] = await noteModel.update({
            isArchived: false,
        }, {
            where: {
                idNote: id,
            }
        });
        if (updateRows === 0)
            return res.status(404).json({
                success: false,
                message: 'La nota no existe',
            });
        return res.status(200).json({
            success: true,
            message: 'La nota fue desarchivada correctamente',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al desarchivar las notas archivadas',
        });
    }

};

const findNotesArchived = async (req, res) => {
    try {
        const notes = await noteModel.findAll({
            where: {
                isArchived: true
            }
        });
        if (notes.length === 0)
            return res.status(204).json({
                success: false,
                message: 'No hay notas archivadas',
            });
        return res.status(200).json({
            success: true,
            data: notes
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al obtener las notas archivadas',
        });
    }
};

const findNotesUnArchived = async (req, res) => {
    try {
        const notes = await noteModel.findAll({
            where: {
                isArchived: false
            }
        });
        if (notes.length === 0)
            return res.status(204).json({
                success: false,
                message: 'No hay notas archivadas',
            });
        return res.status(200).json({
            success: true,
            data: notes
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al obtener las notas archivadas',
        });
    }
};

const findNotesCategory = async (req, res) => { };


module.exports = {
    createNote,
    findNotes,
    findOnlyNote,
    updateNote,
    deleteNote,
    changeNotesToArchived,
    changeNotesToUnarchived,
    findNotesCategory,
    findNotesArchived,
    findNotesUnArchived,
}