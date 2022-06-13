const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    stt:{
        required: true,
        type: Number,
    },
    truongTH:{
        required: true,
        type: String,
    },
    quanHuyen:{
        required: true,
        type: String,
    } ,
    maHocSinh:{
        required: true,
        type: String,
    },
    lop:{
        required: true,
        type: String,
},
    hoTen: {

        required: true,
        type: String
    },
    ngaySinh: {
        required: true,
        type: Number,
    },
    thangSinh: {
        required: true,
        type: Number,
    },
    namSinh: {
        required: true,
        type: Number,
    },
    gioiTinh: {
        required: true,
        type: String,
    },
    noiSinh:{
        required: true,
        type: String,
    },
    danToc: {
        required: true,
        type: String,
    },
    hoKhau: {
        required: true,
        type: String,
    },
    dienThoai: {
        required: true,
        type: String,
    },
    tongDiemNam1: {
        required: true,
        type: Number,
    },
    tongDiemNam2: {
        required: true,
        type: Number,
    },
    tongDiemNam3: {
        required: true,
        type: Number,
    },
    tongDiemNam4: {
        required: true,
        type: Number,
    },
    tongDiemNam5: {
        required: true,
        type: Number,
    },
    tongDiem5Nam: {
        required: true,
        type: Number,
    },
    diemUuTien: {
        type: Number,
    },
    tongDiem: {
        type: Number,
        required: true,
    },
    ghiChu: {
        type: String,
    }

})

module.exports = mongoose.model('Data', dataSchema)