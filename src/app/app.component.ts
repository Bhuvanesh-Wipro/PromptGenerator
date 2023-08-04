import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PromptService } from 'src/prompt.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'prompt';
generated=false
sol_generated = false
  generatedPrompts: any;
  generatedSolution: any;
 
constructor(private promptService: PromptService){}
   public name=""
   public category=""
   public context=""
   public nop=""
   public response=""
   public genRes: string[]=[];
   public res:any;
   public prompts=""
   getPrompts() {
    if(this.template == "issue")
      this.prompts = "Generate "+ this.nop+ "prompts in "+this.language+" that can be given to an Large language model for the issue of "+this.issue+" on"+this.platform+" as  "+this.role+" rephrase the different prompts"
    else if(this.template == "general")
      this.prompts = "Generate" + this.nop + "prompts in "+ this.language+" that can be given to an Large language model for getting information on this topic "+ this.topic;
    this.promptService.llmCalling(this.prompts).subscribe(
        data => this.res=data
      )
    console.log(this.res)
    this.generatedPrompts=this.res.choices[0].text.split("\n")
    console.log(this.generatedPrompts)
    this.generated=true

    }

    // getSolutions() {
    //   console.log(this.res)
    //   // console.log(this.res.choices[0].text)
    //   // const queries = this.res.choices[0].text.split("\n");
    //   // console.log(queries)
    //   // for(var i =0; i< this.generatedPrompts.length;i++){
    //   //   console.log(this.generatedPrompts[i]);
        
    //   //   this.promptService.llmCalling(this.generatedPrompts[i]).subscribe(
    //   //     data => {
    //   //       this.genRes[i] = data.choices[0].text
    //   //       console.log(this.genRes[i]);
            
    //   //     }
          
    //   //   )
    //   // }
      
    //   console.log(this.genRes)
    //   this.generatedSolution = this.genRes
    //   this.sol_generated=true
    // }

    getSolutions() {

      console.log(this.res)

      console.log(this.res.choices[0].text)

      const queries = this.res.choices[0].text.split("\n");

      console.log(queries)

      this.promptService.llmCalling(queries[2]).subscribe(

        data => this.genRes = data.choices[0].text

      )

      console.log(this.genRes)

      this.generatedSolution = this.genRes
      this.sol_generated=true
    }
      
    containsNumbers(input: string): boolean {
      const regex = /\d/; // \d matches any digit (0-9)
      return regex.test(input);
    }

    userId : string ="";
    topic : string = "";
    template : string ="";
    language : string = '';

    platform : String = "";
  
    role : String = "";
  
    issue : String = "";
  
    temperature : String = "";
    

}
