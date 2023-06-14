import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  // name = "Sanjay".toUpperCase()

  names=["Sanjay Prakash","Sanjay","Sadham"]

      
  urls=["https://th.bing.com/th/id/OIP.hmd2EZxOecqRcQ5AMCFarAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7","https://th.bing.com/th/id/OIP.2ipyciZc3yjfiBePI2p0QAHaF6?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7","https://th.bing.com/th/id/OIP.P7WWssTEPcMigh2-PXExkAHaEo?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"];

  items=[{
    name:"Sanjay Prakash",
    url:"https://th.bing.com/th/id/OIP.hmd2EZxOecqRcQ5AMCFarAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    name:"sanjay",
    url:"https://th.bing.com/th/id/OIP.2ipyciZc3yjfiBePI2p0QAHaF6?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
{
  name:"Sadham",
  url:"https://th.bing.com/th/id/OIP.P7WWssTEPcMigh2-PXExkAHaEo?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
}];
}
