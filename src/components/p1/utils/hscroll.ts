//horizentalmouse scroill action


export function horizentalScroll(node) {
	// setup work goes here...
    node.addEventListener("wheel",handelWheel);

    function handelWheel(event){
        event.preventDefault();
        console.log('wheeling :',event.deltaY )
        node.scrollLeft+=event.deltaY
     
    }   
    
    
    return {
		destroy() {
			// ...cleanup goes here
            node.removeEventListener("wheel",handelWheel);
		}
	};
}