function pagebar()
{
  let links=document.getElementByClassName('nav-bar').getElementsByTagName("a");
  let current = location.href;
  for (let i=0; i < links.length; i++)
  {
   if(links[i].href == current)
   {
      links[i].href = "";
      links[i].className='grayStyle';
   }
 }
}
