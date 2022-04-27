$(document).ready(function() {
    var i = 1; 
    $("btnDangKy").click(function(){
        $("#myModal").modal();
    });
    function kiemTraMa(){
        var re = /^\d{10}$/;
        if ($("#txtMaSV").val() == "") {
            $("#tbMa").html("* Bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtMaSV").val())) {
            $("#tbMa").html("*Mã gồm 10 chữ số");
            return false;
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#txtMaSV").blur(kiemTraMa);
    function KTName() {
        var re = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-zA-Z]+){1,})$/;
        if ($("#txtHoTen").val() == "") {
            $("#tbHoten").html("* Bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtHoTen").val())) {
            $("#tbHoten").html("*Chữ cái đầu từ phải viết hoa");
            return false;
        }
        $("#tbHoten").html("*");
        return true;
    }
    $("#txtHoTen").blur(KTName);
    function KTngay() {
        if ($("#txtNgayTg").val() == "") {
            $("#tbNgayTg").html("*Bắt buộc nhập !!");
            return false;
        }
        var day = new Date($("#txtNgayTg").val());
        var today = new Date;
        today.setDate(today.getDate() + 7);
        if (day < today) {
            $("#tbNgayTg").html("*Nhập ngày sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNgayTg").html("*");
        return true;
    }
    $("#txtNgayTg").blur(KTngay);
    function KTEmail() {
        var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ($("#txtEmail").val() == "") {
            $("#tbEmail").html("* Bắt buộc nhập");
            return false;
        }
        if (!email.test($("#txtEmail").val())) {
            $("#tbEmail").html("Nhập theo dạng xxxxxx@iuh.edu.vn");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(KTEmail);
    function KTsdt() {
        var sdt = /^09|^07|^08\d{2}\d{3}\d{3}$/;
        if ($("#txtSdt").val() == "") {
            $("#tbSdt").html("* Bắt buộc nhập");
            return false;
        }
        if (!sdt.test($("#txtSdt").val())) {
            $("#tbSdt").html("Nhập theo dạng 0xxxxxxxxx");
            return false;
        }
        $("#tbSdt").html("*");
        return true;
    }
    $("#txtSdt").blur(KTsdt);
    $("#btnLuu").click(function () {
        if(!kiemTraMa()||!KTName()||!KTngay()||!KTEmail()||!KTsdt()){
            $("#thongbao").html("Vui lòng nhập đầy đủ thông tin");
            return false;
        }
        var maSV = $("#txtMaSV").val();
        var ten = $("#txtHoTen").val();
        var ngay = $("#txtNgayTg").val();
        var email = $("#txtEmail").val();
        var sdt = $("#txtSdt").val();

        var them = "<tr><td>" + (i++) + "</td><td>" + maSV + "</td><td>" + ten + "</td><td>" + ngay + "</td><td>" + email + "</td><td>" + sdt +"</td></tr>"
        $("#danhSach").append(them);
        $("#myModal").modal("hide");
        return true;
    })
})