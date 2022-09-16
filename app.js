var initialPrice=document.querySelector("#initial-price");
var stocksQuantity=document.querySelector("#stocks-quantity");
var curentPrice=document.querySelector("#current-price");
var submitButton=document.querySelector("#submit-btn");
var outputBox=document.querySelector("#output-box");
// event listner

submitButton.addEventListener('click',submithandler);
function submithandler(){
    var ip=Number.parseFloat(initialPrice.value).toFixed(3);
    var qty=Number.parseFloat(stocksQuantity.value).toFixed(3);
    var curr=Number.parseFloat(curentPrice.value).toFixed(3);
   
    calculateprofitandLoss(ip,qty,curr);

}

 
function calculateprofitandLoss(initial,quantity,current){
      
    
   
                       if(initial>current)
                        {
                             var loss=Number.parseFloat((initial-current)*quantity).toFixed(3);
                             var losspercentage=Number.parseFloat((loss/initial)*100).toFixed(3);

                             showOutput(`😟loss is ${loss}
                             % is "${losspercentage}😟`);
                             
                            
                            }    
                            else if(current>initial)
                            {
                                
                                //profit logic
                                var profit=Number.parseFloat((current-initial)*quantity).toFixed(3);
                                var profitpercentage=Number.parseFloat((profit/initial)*100).toFixed(3);
                                showOutput(`✨✨profit is ${profit} % is ${profitpercentage}✨✨`);
                         } 
                         else if(initial===current){
                            
                            //rest of logic barabar vali condition
                            showOutput("⭕No profit loss⭕ ");
                         }
                         
                        }
                    

function showOutput(message)
{

   
    outputBox.innerHTML= message;
   
}
// calculateprofitandLoss(10,10,10);