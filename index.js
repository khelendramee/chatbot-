 var khele = document.getElementById("h1_1").innerHTML = "jaipur";
    document.getElementById("h1").innerHTML = "25°c";
    async function khe() {
      event.preventDefault();
      var temp = document.getElementById("h1")
      var main1 = document.getElementById("main").value;
      var khele = document.getElementById("h1_1").innerHTML = main1;
      document.getElementById("main").value = "";
  
      const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + main1;
  
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4f84e6c1a0msh0b05da8bfff1716p1000fbjsn645897102ec2',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };
  
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        temp.innerHTML = result.temp + '°c';
  
        console.log(result)
      } catch (error) {
        console.error(error);
      }
    }
