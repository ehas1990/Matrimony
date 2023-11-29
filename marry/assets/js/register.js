$(document).ready(function () {
  // $(".text-fill").hide();
  $(".profilebtn_1").click(function (event) {
    var Select_Profile = $(".Select_Profile").find(":selected").val();
    const EnterName= $(".EnterName").val();
    const Mobile_number= $(".Mobile_number").val();
    const  E_mail= $(".E_mail").val();
    if (
      Select_Profile == "" ||
      EnterName == "" ||
      Mobile_number == "" ||
      E_mail == ""
     
    ) {
      if (Select_Profile== "") {
        $(".Select_Profile").addClass("is-invalid");
        $("#errorSelect_Profile").html("Select The Select Profile!");
        $("#errorSelect_Profile").css("color", "red");
        event.preventDefault();
      } else {
        $(".Select_Profile").removeClass("is-invalid");
        $(".Select_Profile").addClass("is-valid");

        $("#errorSelect_Profile").html("Looks good!");
        $("#errorSelect_Profile").css("color", "green");
      }
      if (EnterName == "") {
        $(".EnterName").addClass("is-invalid");
        $("#errorEnterName").html("Enter the EnterName!");
        $("#errorEnterName").css("color", "red");
        event.preventDefault();
      } else {
        $(".EnterName").removeClass("is-invalid");
        $(".EnterName").addClass("is-valid");
        $("#errorEnterName").html("Looks good!");
        $("#errorEnterName").css("color", "green");
      }
      // if (code == "") {
      //   alert("Country Code is required");
      //   event.preventDefault();
      // }
      if (Mobile_number == "") {
       
        $(".Mobile_number").addClass("is-invalid");
        $("#errorMobile_number").html("Enter the Contact Number!");
        $("#errorMobile_number").css("color", "red");
        event.preventDefault();
      } else {
        $(".Mobile_number").removeClass("is-invalid");
        $(".Mobile_number").addClass("is-valid");
        $("#errorMobile_number").html("Looks good!");
        $("#errorMobile_number").css("color", "green");
        }
       
      
      if (E_mail == "") {
        $(".E_mail").addClass("is-invalid");
        $("#errorE_mail").html("Enter the E-mail!");
        $("#errorE_mail").css("color", "red");
        event.preventDefault();
      } else {
        $(".E_mail").removeClass("is-invalid");
        $("..E_mail").addClass("is-valid");
        $("#errorE_mail").html("Looks good!");
        $("#errorE_mail").css("color", "green");
      }
    } else {
      $("#collapse_One").hide();
      $("#collapseTwo").hide();
      $("#collapseThree").hide();
      $("#collapseFour").hide();
      $("#collapseFive").hide();
      $("#collapseSix").hide();
      $("#collapseSeven").hide();
      $("#collapseOne").show();
      $(".header_1").show();
      $("#header_1").hide();
    }
  });
});

$(document).ready(function () {
  // $(".text-fill").hide();
  $(".profilebtn1").click(function (event) {
    var gender = $(".form-select").find(":selected").val();

    var dob = $("#dob").val();

    // const code = $(".code").val();
    const mobile = $(".mobile").val();
  
    const password = $(".password").val();
    if (
      gender == "" ||
      dob == "" ||
      // code == "" ||
      mobile == "" ||
      password == ""
    ) {
      if (gender == "") {
        $(".form-select").addClass("is-invalid");
        $("#errorgender").html("Select The Gender!");
        $("#errorgender").css("color", "red");
        event.preventDefault();
      } else {
        $(".form-select").removeClass("is-invalid");
        $(".form-select").addClass("is-valid");

        $("#errorgender").html("Looks good!");
        $("#errorgender").css("color", "green");
      }
      if (dob == "") {
        $("#dob").addClass("is-invalid");
        $("#errordob").html("Enter the Date of Birth!");
        $("#errordob").css("color", "red");
        event.preventDefault();
      } else {
        $("#dob").removeClass("is-invalid");
        $("#dob").addClass("is-valid");
        $("#errordob").html("Looks good!");
        $("#errordob").css("color", "green");
      }
      // if (code == "") {
      //   alert("Country Code is required");
      //   event.preventDefault();
      // }
      if (mobile == "") {
       
        $("#mobile").addClass("is-invalid");
        $("#errormobile").html("Enter the Contact Number!");
        $("#errormobile").css("color", "red");
        event.preventDefault();
      } else {
        $("#mobile").removeClass("is-invalid");
        $("#mobile").addClass("is-valid");
        $("#errormobile").html("Looks good!");
        $("#errormobile").css("color", "green");
        }
       
      
      if (password == "") {
        $("#password").addClass("is-invalid");
        $("#errorpassword").html("Enter the Password!");
        $("#errorpassword").css("color", "red");
        event.preventDefault();
      } else {
        $("#password").removeClass("is-invalid");
        $("#password").addClass("is-valid");
        $("#errorpassword").html("Looks good!");
        $("#errorpassword").css("color", "green");
      }
    } else {
      $("#collapse_One").hide();
      $("#collapseOne").hide();
      $("#collapseThree").hide();
      $("#collapseFour").hide();
      $("#collapseFive").hide();
      $("#collapseSix").hide();
      $("#collapseSeven").hide();
      $("#collapseTwo").show();
     
     
    }
  });
});

$(document).ready(function () {
  $(".profilebtn2").click(function (event) {
    var lang = $(".lang").find(":selected").val();
    
    var marital = $(".marital").find(":selected").val();
    var religion = $(".religion").find(":selected").val();
    var caste = $(".caste").find(":selected").val();
    var jadhagam = $(".jadhagam").find(":selected").val();

    if (
      lang == "" ||
      marital == "" ||
      religion == "" ||
      caste == "" ||
      jadhagam == ""
    ) {
        if (lang == "") {
        $(".lang").addClass("is-invalid");
        $("#errorMotherTongue").html("Select The Mother Tongue!");
        $("#errorMotherTongue").css("color", "red");
        event.preventDefault();
      } else {
        $(".lang").removeClass("is-invalid");
        $(".lang").addClass("is-valid");

        $("#errorMotherTongue").html("Looks good!");
        $("#errorMotherTongue").css("color", "green");
      }
      if (marital == "") {
        $(".marital").addClass("is-invalid");
        $("#errorMarital").html("Select The Marital!");
        $("#errorMarital").css("color", "red");
        event.preventDefault();
      } else {
        $(".marital").removeClass("is-invalid");
        $(".marital").addClass("is-valid");

        $("#errorMarital").html("Looks good!");
        $("#errorMarital").css("color", "green");
      }
      if (religion == "") {
        $(".religion").addClass("is-invalid");
        $("#errorreligions").html("Select The Religion!");
        $("#errorreligions").css("color", "red");
        event.preventDefault();
      } else {
        $(".religion").removeClass("is-invalid");
        $(".religion").addClass("is-valid");

        $("#errorreligions").html("Looks good!");
        $("#errorreligions").css("color", "green");
      }
      if (caste == "") {
        $(".caste").addClass("is-invalid");
        $("#errorcaste").html("Select The Caste!");
        $("#errorcaste").css("color", "red");
        event.preventDefault();
      } else {
        $(".caste").removeClass("is-invalid");
        $(".caste").addClass("is-valid");

        $("#errorcaste").html("Looks good!");
        $("#errorcaste").css("color", "green");
      }
      if (jadhagam == "") {
        $(".jadhagam ").addClass("is-invalid");
        $("#errorjadhagam").html("Select The Jadhagam!");
        $("#errorjadhagam").css("color", "red");
        event.preventDefault();
      } else {
        $(".jadhagam ").removeClass("is-invalid");
        $(".jadhagam ").addClass("is-valid");

        $("#errorjadhagam").html("Looks good!");
        $("#errorjadhagam").css("color", "green");
      }
    } else {
      $("#collapse_One").hide();
      $("#collapseOne").hide();
      $("#collapseTwo").hide();
      $("#collapseFour").hide();
      $("#collapseFive").hide();
      $("#collapseSix").hide();
      $("#collapseSeven").hide();
      $("#collapseThree").show();
    }
  });
});

$(document).ready(function () {
  $(".profilebtn3").click(function (event) {
    var height = $(".height").find(":selected").val();
    var Disbaility = $(".Disbaility").find(":selected").val();
    var familystatus = $(".familystatus").find(":selected").val();
    var familytype = $(".familytype").find(":selected").val();
    if (
      height == "" ||
      Disbaility == "" ||
     familystatus == "" ||
      familytype == ""
    ){
      if ( height == "") {
        $(".height").addClass("is-invalid");
        $("#errorheight").html("Select The  Height!");
        $("#errorheight").css("color", "red");
        event.preventDefault();
      } else {
        $(".height").removeClass("is-invalid");
        $(".height").addClass("is-valid");

        $("#errorheight").html("Looks good!");
        $("#errorheight").css("color", "green");
      }
      if (  Disbaility  == "") {
        $(".Disbaility ").addClass("is-invalid");
        $("#errorDisbaility").html("Select The   Disbaility!");
        $("#errorDisbaility").css("color", "red");
        event.preventDefault();
      } else {
        $(".Disbaility ").removeClass("is-invalid");
        $(".Disbaility ").addClass("is-valid");

        $("#errorDisbaility").html("Looks good!");
        $("#errorDisbaility").css("color", "green");
      }
      if (  familystatus == "") {
        $(".familystatus ").addClass("is-invalid");
        $("#errorfamilystatus").html("Select The  Family Status!");
        $("#errorfamilystatus").css("color", "red");
        event.preventDefault();
      } else {
        $(".familystatus").removeClass("is-invalid");
        $(".familystatus").addClass("is-valid");

        $("#errorfamilystatus").html("Looks good!");
        $("#errorfamilystatus").css("color", "green");
      }
      if (  familytype == "") {
        $(".familytype ").addClass("is-invalid");
        $("#errorfamilytype").html("Select The  Family Type!");
        $("#errorfamilytype").css("color", "red");
        event.preventDefault();
      } else {
        $(".familytype").removeClass("is-invalid");
        $(".familytype").addClass("is-valid");

        $("#errorfamilytype").html("Looks good!");
        $("#errorfamilytype").css("color", "green");
      }
    }else{
    $("#collapse_One").hide();  
    $("#collapseOne").hide();
    $("#collapseTwo").hide();
    $("#collapseThree").hide();
    $("#collapseFive").hide();
    $("#collapseSix").hide();
    $("#collapseSeven").hide();
    $("#collapseFour").show();
    }
  });
});

$(document).ready(function () {
  $(".profilebtn4").click(function (event) {
    var  Education = $(".Education").find(":selected").val();
    var Occupation = $(".Occupation").find(":selected").val();
    var Income = $(".Income").find(":selected").val();
    var Employed = $(".Employed ").find(":selected").val();
    var Work = $(".Work").find(":selected").val();
    var WorkState = $(".WorkState ").find(":selected").val();
    if (
      Education== "" ||
      Occupation == "" ||
      Income == "" ||
      Employed == "" ||
      Work == "" ||
      WorkState == "" 

    ){
      if (  Education == "") {
        $(".Education").addClass("is-invalid");
        $("#errorEducation").html("Select The Education!");
        $("#errorEducation").css("color", "red");
        event.preventDefault();
      } else {
        $(".Education").removeClass("is-invalid");
        $(".Education").addClass("is-valid");

        $("#errorEducation").html("Looks good!");
        $("#errorEducation").css("color", "green");
      }
      if ( Occupation == "") {
        $(".Occupation ").addClass("is-invalid");
        $("#errorOccupation").html("Select The Occupation!");
        $("#errorOccupation").css("color", "red");
        event.preventDefault();
      } else {
        $(".Occupation ").removeClass("is-invalid");
        $(".Occupation").addClass("is-valid");

        $("#errorOccupation").html("Looks good!");
        $("#errorOccupation").css("color", "green");
      }
      if (  Income == "") {
        $(".Income ").addClass("is-invalid");
        $("#errorIncome").html("Select The Anual Income!");
        $("#errorIncome").css("color", "red");
        event.preventDefault();
      } else {
        $(".Income").removeClass("is-invalid");
        $(".Income").addClass("is-valid");

        $("#errorIncome").html("Looks good!");
        $("#errorIncome").css("color", "green");
      }
      if (  Employed == "") {
        $(".Employed ").addClass("is-invalid");
        $("#errorEmployed").html("Select The  Employed In!");
        $("#errorEmployed").css("color", "red");
        event.preventDefault();
      } else {
        $(".Employed").removeClass("is-invalid");
        $(".Employed").addClass("is-valid");

        $("#errorEmployed").html("Looks good!");
        $("#errorEmployed").css("color", "green");
      }
      if (   Work == "") {
        $(".Work").addClass("is-invalid");
        $("#errorWork").html("Select The  Work Location!");
        $("#errorWork").css("color", "red");
        event.preventDefault();
      } else {
        $(".Work").removeClass("is-invalid");
        $(".Work").addClass("is-valid");

        $("#errorWork").html("Looks good!");
        $("#errorWork").css("color", "green");
      }
      if ( WorkState == "") {
        $(".WorkState").addClass("is-invalid");
        $("#errorWorkState").html("Select The Work Location!");
        $("#errorWorkState").css("color", "red");
        event.preventDefault();
      } else {
        $(".WorkState").removeClass("is-invalid");
        $(".WorkState").addClass("is-valid");

        $("#errorWorkState").html("Looks good!");
        $("#errorWorkState").css("color", "green");
      }
    }else{
    $("#collapse_One").hide();
    $("#collapseOne").hide();
    $("#collapseThree").hide();
    $("#collapseFour").hide();
    $("#collapseTwo").hide();
    $("#collapseSix").hide();
    $("#collapseSeven").hide();
    $("#collapseFive").show();
    }
  });
});
$(document).ready(function () {
  $(".profilebtn5").click(function ( event) {
    var SelectProfile = $(".SelectProfile").find(":selected").val();
   
    if (
      SelectProfile == ""
     
    ){
      if ( SelectProfile == "") {
        $(".SelectProfile").addClass("is-invalid");
        $("#errorSelectProfile").html("Select The Profile!");
        $("#errorSelectProfile").css("color", "red");
        event.preventDefault();
      } else {
        $(".SelectProfile").removeClass("is-invalid");
        $(".SelectProfile").addClass("is-valid");

        $("#errorSelectProfile").html("Looks good!");
        $("#errorSelectProfile").css("color", "green");
      }
      }else
      {

    $("#collapse_One").hide();
    $("#collapseOne").hide();
    $("#collapseThree").hide();
    $("#collapseFour").hide();
    $("#collapseFive").hide();
    $("#collapseTwo").hide();
    $("#collapseSeven").hide();
    $("#collapseSix").show();
      }
  });
});
$(document).ready(function () {

  $(".profilebtn6").click(function (event) {
    var YourCountry = $(".YourCountry").find(":selected").val();
    var  YourState = $(".YourState").find(":selected").val();
    var District = $(".District").find(":selected").val();
    const pincode = $(".pincode").val();
   
    if (
      YourCountry == "" ||
      YourState == "" ||
      District == "" ||
      pincode == "" 
     
    ){
      if ( YourCountry == "") {
        $(".YourCountry").addClass("is-invalid");
        $("#errorYourCountry").html("Select Your Country!");
        $("#errorYourCountry").css("color", "red");
        event.preventDefault();
      } else {
        $(".YourCountry").removeClass("is-invalid");
        $(".YourCountry").addClass("is-valid");

        $("#errorYourCountry").html("Looks good!");
        $("#errorYourCountry").css("color", "green");
      }
      if (  YourState == "") {
        $(".YourState").addClass("is-invalid");
        $("#errorYourState").html("Select Your State!");
        $("#errorYourState").css("color", "red");
        event.preventDefault();
      } else {
        $(".YourState").removeClass("is-invalid");
        $(".YourState").addClass("is-valid");

        $("#errorYourState").html("Looks good!");
        $("#errorYourState").css("color", "green");
      }
      if (  District == "") {
        $(".District").addClass("is-invalid");
        $("#errorDistrict").html("Select Your District!");
        $("#errorDistrict").css("color", "red");
        event.preventDefault();
      } else {
        $(".District").removeClass("is-invalid");
        $(".District").addClass("is-valid");

        $("#errorDistrict").html("Looks good!");
        $("#errorDistrict").css("color", "green");
      }
      if (  pincode == "") {
        $(".pincode").addClass("is-invalid");
        $("#errorpincode").html("Enter The Location!");
        $("#errorpincode").css("color", "red");
        event.preventDefault();
      } else {
        $(".pincode").removeClass("is-invalid");
        $(".pincode").addClass("is-valid");

        $("#errorpincode").html("Looks good!");
        $("#errorpincode").css("color", "green");
      }
      }
      else{
    $("#collapse_One").hide();
    $("#collapseOne").hide();
    $("#collapseThree").hide();
    $("#collapseFour").hide();
    $("#collapseFive").hide();
    $("#collapseSix").hide();
    $("#collapseTwo").hide();
    $("#collapseSeven").show();
      }
  });
});
$(document).ready(function () {

  $(".profilebtn6").click(function (event) {
    var IDproof1 = $(".IDproof1").find(":selected").val();
  
   
    if (
      IDproof1== ""
     
     
    ){
      if ( IDproof1 == "") {
        $(".IDproof1").addClass("is-invalid");
        $("#errorIDproof1").html("Select Your ID Proof!");
        $("#errorIDproof1").css("color", "red");
        event.preventDefault();
      } else {
        $(".IDproof1").removeClass("is-invalid");
        $(".IDproof1").addClass("is-valid");

        $("#errorIDproof1").html("Looks good!");
        $("#errorIDproof1").css("color", "green");

      }
    }
      else{

   
      }
  });
});

