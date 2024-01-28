const connection = require("database");
// const express = require("express");

const getHomepage = async (req, res) => {
  connection.query(
    `select * from sanpham order by masanpham`,

    function (err, results) {
      res.render("home.ejs", { dataProduct: results });
    }
  );
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const postCreateUser = (req, res) => {
  let masanpham = req.body.masanpham;
  let tensanpham = req.body.tensanpham;
  let mota = req.body.mota;
  let gia = req.body.gia;
  let soluong = req.body.soluong;

  connection.query(
    `INSERT INTO sanpham (masanpham, tensanpham, mota, gia, soluong)
     VALUES (?, ? , ?, ?, ?)`,
    [masanpham, tensanpham, mota, gia, soluong],
    function (err, results) {
      res.redirect("/");
    }
  );
};

const getEditPage = (req, res) => {
  let masanpham = req.params.masanpham;
  connection.execute(
    "select * from `sanpham` where masanpham = ?",
    [masanpham],
    function (err, results) {
      res.render("edit.ejs", { dataProduct: results[0] });
    }
  );
};

const updateProduct = (req, res, err) => {
  let mota = req.body.mota;
  let tensp = req.body.tensanpham;
  let gia = req.body.gia;
  let soluong = req.body.soluong;
  let masanpham = req.body.masanpham;
  connection.execute(
    "UPDATE sanpham SET tensanpham = ?,mota = ?,gia = ?,soluong = ? WHERE masanpham = ?",
    [tensp, mota, gia, soluong, masanpham],
    function (err, results) {
      res.redirect("/");
    }
  );
};

const deleteProduct = (req, res) => {
  const productId = req.body.productId;
  connection.execute(
    "delete from `sanpham` where masanpham = ?",
    [productId],
    function (err, results) {
      res.redirect("/");
    }
  );
};

module.exports = {
  getHomepage,
  postCreateUser,
  getEditPage,
  updateProduct,
  deleteProduct,
  getCreatePage,
};
