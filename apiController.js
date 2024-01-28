const express = require("express");
const connection = require("database.js");
const fs = require("fs");

const getAllProduct = (req, res) => {
  connection.query("SELECT * FROM `sanpham`", function (err, results) {
    res.status(200).json({
      message: "ok",
      data: results,
    });
  });
};

const createProduct = async (req, res) => {
  let id = req.body.masanpham;
  let tensp = req.body.tensanpham;
  let mota = req.body.mota;
  let soluong = req.body.soluong;
  let giatien = req.body.gia;

  if (!id || !tensp || !mota || !soluong || !giatien) {
    return res.status(200).json({
      message: "missing ",
    });
  }
  connection.execute(
    "insert into sanpham(masanpham,tensanpham,mota,gia,soluong) values (?,?,?,?,?)",
    [id, tensp, mota, giatien, soluong],
    function (err, results) {
      res.status(200).json({
        message: "ok",
      });
    }
  );
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  if (!productId) {
    return res.status(200).json({
      message: "missing ",
    });
  }
  connection.execute(
    "delete from `sanpham` where masanpham = ?",
    [productId],
    function (err, results) {
      res.status(200).json({
        message: "ok",
      });
    }
  );
};

const updateProduct = async (req, res) => {
  let id = req.body.masanpham;
  let tensp = req.body.tensanpham;
  let mota = req.body.mota;
  let soluong = req.body.soluong;
  let giatien = req.body.gia;

  if (!id || !tensp || !mota || !soluong || !giatien) {
    return res.status(200).json({
      message: "missing ",
    });
  }
  connection.execute(
    "UPDATE sanpham SET tensanpham = ?,mota = ?,gia = ?,soluong = ? WHERE masanpham = ?",
    [id, tensp, mota, giatien, soluong],
    function (err, results) {
      res.status(200).json({
        message: "ok",
      });
    }
  );
};

module.exports = {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
