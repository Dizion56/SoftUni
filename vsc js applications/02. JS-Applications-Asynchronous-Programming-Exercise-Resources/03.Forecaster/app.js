async function attachEvents() {
  const getWeatherResponse = await fetch(
    `http://localhost:3030/jsonstore/forecaster/locations`
  ).then((getWeatherResponse) => getWeatherResponse.json());

  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", getWeather);

  async function getWeather() {
    let code = "";
    const location = document.getElementById("location").value;
    let flag = false;
    getWeatherResponse.forEach((e) => {
      if (e.name === location) {
        code = e.code;
        flag = true;
      }
    });
    if (flag) {
      const conditionRequest = fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${code}`
      ).then((result) => result.json());

      const upcommingRequest = fetch(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
      ).then((result) => result.json());

      const weatherResponse = await Promise.all([
        conditionRequest,
        upcommingRequest,
      ]);

      if (document.querySelector(".error")) {
      }

      if (document.querySelector(".forecasts")) {
        const currentDiv = document.getElementById("current");
        currentDiv.removeChild(currentDiv.lastChild);
      }

      document.getElementById("forecast").style.display = "block";
      document
        .getElementById("current")
        .appendChild(createElemsCurrCondition(weatherResponse[0]));

      if (document.querySelector(".forecast-info")) {
        const currentDiv = document.getElementById("upcoming");
        currentDiv.removeChild(currentDiv.lastChild);
        console.log(currentDiv.lastChild);
      }

      document
        .getElementById("upcoming")
        .appendChild(threeDayForecast(weatherResponse[1]));
    } else {
      document.getElementById("forecast").style.display = "block";
      const forecastDiv = document.getElementById("forecast");
      const spanError = document.createElement("span");
      spanError.textContent = "Error";
      spanError.className = "error";
      forecastDiv.appendChild(spanError);
    }
  }

  function createElemsCurrCondition(weatherObj) {
    const div = document.createElement("div");
    div.className = "forecasts";

    const spanConditionSymbol = document.createElement("span");
    const spanCondition = document.createElement("span");

    spanConditionSymbol.className = "condition symbol";
    spanCondition.className = "condition";

    spanConditionSymbol.innerHTML = weatherSymbol(
      weatherObj.forecast.condition
    );

    const spanName = document.createElement("span");
    const spanLowHigh = document.createElement("span");
    const spanCondition2 = document.createElement("span");

    spanName.textContent = weatherObj.name;
    spanLowHigh.textContent = `${weatherObj.forecast.low}°/${weatherObj.forecast.high}°`;
    spanCondition2.textContent = weatherObj.forecast.condition;

    spanName.className = "forecast-data";
    spanLowHigh.className = "forecast-data";
    spanCondition2.className = "forecast-data";

    spanCondition.appendChild(spanName);
    spanCondition.appendChild(spanLowHigh);
    spanCondition.appendChild(spanCondition2);
    div.appendChild(spanConditionSymbol);
    div.appendChild(spanCondition);

    return div;
  }

  function threeDayForecast(weatherObj) {
    let div = document.createElement("div");
    div.className = "forecast-info";

    weatherObj.forecast.forEach((e) => {
      const span = document.createElement("span");
      span.className = "upcomming";

      const spanSymbol = document.createElement("span");
      const spanLowHigh = document.createElement("span");
      const spanCondition = document.createElement("span");

      spanSymbol.className = "symbol";
      spanLowHigh.className = "forecast-data";
      spanCondition.className = "forecast-data";

      spanSymbol.innerHTML = weatherSymbol(e.condition);
      spanLowHigh.textContent = `${e.low}°/${e.high}°`;
      spanCondition.textContent = e.condition;

      span.append(spanSymbol, spanLowHigh, spanCondition);
      div.appendChild(span);
    });

    return div;
  }

  function weatherSymbol(weatherString) {
    switch (weatherString) {
      case "Sunny":
        return "&#x2600;";
      case "Partly sunny":
        return "&#x26C5;";
      case "Overcast":
        return "&#x2601;";
      case "Rain":
        return "&#x2614;";
    }
  }
}
attachEvents();
