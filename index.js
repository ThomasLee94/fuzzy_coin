abi = JSON.parse('{"constant": true,"inputs": [],"name": "name","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"}');

provider = new ethers.providers.Web3Provider(web3.currentProvider);

contract = new ethers.Contract(<CONTRACT_COMPILED_ADDRESS>, abi)

{/* candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}

function voteForCandidate(candidate) {
 candidateName = $("#candidate").val();
  console.log(candidateName);

  contract.voteForCandidate(ethers.utils.formatBytes32String(candidateName)).then((f) => {
    let div_id = candidates[candidateName];
    contract.totalVotesFor(ethers.utils.formatBytes32String(candidateName)).then((f) => {
      $("#" + div_id).html(f);
    })
  });
}

$(document).ready(function() {
  
 candidateNames = Object.keys(candidates);

 for(var i=0; i<candidateNames.length; i++) {
  let name = candidateNames[i];
  contract.totalVotesFor(ethers.utils.formatBytes32String(name)).then((f) => {
    $("#" + candidates[name]).html(f);
  })
 }
}); */}