import { showRightSide } from "$state/p";


export function horizentalScroll(node) {
    // setup work goes here...
    node.addEventListener("wheel", handelWheel);

    function handelWheel(event) {
        event.preventDefault();
        //console.log('wheeling :', event.deltaY)
        node.scrollLeft += event.deltaY



    }


    return {
        destroy() {
            // ...cleanup goes here
            node.removeEventListener("wheel", handelWheel);
        }
    };
}


export function toggleSide(node) {
    // setup work goes here...
    node.addEventListener("click", handeClick);

    function handeClick(event) {
        let state: boolean;
        let unsubscribe = showRightSide.subscribe((st) => {
            state = st
        })
        unsubscribe()

        showRightSide.set(!state)
        //   event.preventDefault();
        // console.log('wheeling :', event.deltaY)
        // alert('clicked 33')
        // setContext('showRightSide', true)

    }


    return {
        destroy() {
            // ...cleanup goes here
            node.removeEventListener("click", handeClick);
        }
    };
}