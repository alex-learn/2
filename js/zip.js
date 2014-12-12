      function fillCity() {
        var cityName;
        var zipEntered = document.getElementById("zip").value;
        switch (zipEntered) {
          case "1111" :
            cityName = "Chicago";
            break
          case "2222" :
            cityName = "Dalas";
            break
          case "3333" :
            cityName = "San Francisco";
        }
          document.getElementById("city").value = cityName;
        }
