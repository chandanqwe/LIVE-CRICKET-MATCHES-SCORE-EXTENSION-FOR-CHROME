async function getMatchData() {

    return await fetch('https://api.cricapi.com/v1/currentMatches?apikey=9896e199-ec63-418d-92ae-7d364bb8d44c&offset=0')
      .then(data => data.json())
      .then(data => {
  
        if (data.status != "success") return;
  
        const matchesList = data.data; 
  
        if(!matchesList) return [];
  
        const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);
  
        console.log({relevantData});
  
        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`); 
  
        return relevantData;
  
      })
      .catch(e => console.log(e));
  
  };
  
  getMatchData();