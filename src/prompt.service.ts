import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai/';
// import { OpenAI } from '@openai/client';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  constructor(private http:HttpClient){}
  private apiUrl = 'https://api.openai.com/v1/completions'
  private apiKey = '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'


  llmCalling(prompts:string): Observable<any> {

    const headers = new HttpHeaders({
           'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        });
    

        const body = {
      
                model: "text-davinci-003",
                prompt: prompts,
                // "Provide me with instructions to reset outlook password",
                temperature: 0.7,
                max_tokens: 1000,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0
              
              // Other parameters as needed by the OpenAI API
            };

         console.log("Hidfghfjgk")
        return (this.http.post<any>(this.apiUrl, body, { headers: headers }))
    
  }

  // // private apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions'; // Replace with the appropriate OpenAI API endpoint
  // private apiUrl="https://api.openai.com/v1/completions"
  // private apiKey = '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'; 

  // // private openai!: OpenAI;

  // constructor(private http: HttpClient){

  // }


  

  // // constructor(private http: HttpClient) {
  // //   this.openai = new OpenAI({
  // //     apiKey: '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',
  // //   });
  // // }

  // openai = new OpenAIApi(new Configuration({
  //   apiKey: "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"
  // }))



  // // const openai = new OpenAIApi({
  // //   apiKey: 'YOUR_API_KEY',
  // // });
  
  // // const response = await openai.completions({
  // //   model: 'text-davinci-002',
  // //   prompt: 'Write a poem about love.',
  // //   temperature: 0.7,
  // //   max_tokens: 100,
  // //   top_p: 0.9,
  // // });
  
  // // const completion = response.data.choices[0].text;


  // callLLM(context: string): Promise<any>{


  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.apiKey}`
  //   });

  //   const body = {
      
  //       model: "text-davinci-003",
  //       prompt: "Provide me with instructions to reset outlook password",
  //       temperature: 0.7,
  //       max_tokens: 500,
  //       top_p: 1,
  //       frequency_penalty: 0,
  //       presence_penalty: 0
      
  //     // Other parameters as needed by the OpenAI API
  //   };

  //   return this.http.post<any>(this.apiUrl, body, { headers: headers }).toPromise();
  


    // generatePrompt(: string): Promise<any> {
      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   'Authorization': `Bearer ${this.apiKey}`
      // });
  
      // const body = {
      //   prompt: prompt,
      //   // Other parameters as needed by the OpenAI API
      // };
  
      // return this.http.post<any>(this.apiUrl, body, { headers: headers }).toPromise();
    








    // this.openai.
    // return this.http.get(
    //   'https://api.openai.com/v1/engines/text-davinci-002/completions',
    //   {
    //     params: {
    //       prompt,
    //       max_tokens: 256,
    //     },
    //     headers: {
    //       'Authorization': `Bearer ${this.openai.apiKey}`,
    //     },
    //   }
    // )
    // console.log("Holaaaaa")
  }
  

