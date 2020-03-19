import React from 'react'

function Finished (){

    const items = ['sweatshirt','book','brush','towel','socks','phone','skateboard','tv','dog'];

    const resetGame = () => {
        console.log('reset')

        for (var i = 0, len = items.length; i < len; i++) {
            someFn(items[i]);
            }

        var div = document.getElementById('finished')
        div.style.display = "none"
        var game = document.querySelector('.flexbox')
        game.style.display = "flex"
    }
    const someFn = (item) => {
        var card = document.getElementById(item)

        if(card.id == "dog" || card.id == "sweatshirt" || card.id == "book"){
            var div = document.getElementById('board-2');
        }else if(card.id == "tv" || card.id == "brush" || card.id == "towel"){
            var div = document.getElementById('board-3');
        }else if(card.id == "skateboard" || card.id == "socks" || card.id == "phone"){
            var div = document.getElementById('board-4');
        }
        
        if(card.id != "dog" && card.id != "tv" && card.id != "skateboard" ){
                let itembag = 'bag' + card.id
                console.log(itembag)
                let bag = document.getElementById(itembag);
                console.log(bag)
                bag.style.display = 'none'
        }


        card.setAttribute('draggable',true)
        card.setAttribute('finished',false)
        card.classList.remove("false");
        card.classList.add("organs");
        div.appendChild(card);
    }
    return (
            <div id="finished" className="game__body--labels" >
                <img className="whole__body--labels" src="/svgs/games/lichaam/end_game/reset_game.svg" alt="Reset Game" onClick={() => resetGame()}/>
            </div>
    )
}
export default Finished