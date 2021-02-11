
<script>
    import Icon from './Icon.svelte'
</script>
<div class='flex flex-row  bg-white  py-3 px-5 rounded-full text-gray-400 focus-within:text-gray-500  cursor-pointer'>
    <input class='flex-grow text-md truncate  focus:outline-none focus:placeholder-gray-300' type="text" placeholder="Search by food name">
    <div class='flex-shrink-0'><Icon name='search' stroke={2}></Icon></div>
    
</div>
