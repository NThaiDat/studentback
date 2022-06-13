const express = require('express');
const Model = require('../Model/model');
const {query} = require("express");
const router = express.Router()

module.exports = router;
//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        stt: req.body.stt,
        truongTH: req.body.truongTH,
        quanHuyen: req.body.quanHuyen,
        maHocSinh: req.body.maHocSinh,
        lop: req.body.lop,
        hoTen: req.body.hoTen,
        ngaySinh: req.body.ngaySinh,
        thangSinh: req.body.thangSinh,
        namSinh: req.body.namSinh,
        gioiTinh: req.body.gioiTinh,
        noiSinh: req.body.noiSinh,
        danToc: req.body.danToc,
        hoKhau: req.body.hoKhau,
        dienThoai: req.body.dienThoai,
        tongDiemNam1: req.body.tongDiemNam1,
        tongDiemNam2: req.body.tongDiemNam2,
        tongDiemNam3: req.body.tongDiemNam3,
        tongDiemNam4: req.body.tongDiemNam4,
        tongDiemNam5: req.body.tongDiemNam5,
        tongDiem5Nam: req.body.tongDiem5Nam,
        diemUuTien: req.body.diemUuTien,
        tongDiem: req.body.tongDiem,
        ghiChu: req.body.ghiChu,
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne', async (req, res) => {
    try {
      const filter = req.query;
      const filterData = await Model.find(filter);
      res.json(filterData)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//Delete Method
router.delete('/delete', async (req, res) => {
    try {
      await  Model.deleteMany({});
      return res.json({message: "Deleted"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

