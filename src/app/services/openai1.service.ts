import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Openai1Service {
  OPENAI_API_KEY = "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"; 
  //'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';

  constructor(private http: HttpClient) {}

  configuration = new Configuration({
    // organization: "org-2br0g8pwWRiEjfV85XVAPi1o",
    apiKey: this.OPENAI_API_KEY,
  });

  openai = new OpenAIApi(this.configuration);

  call() {
    this.openai.listEngines().then((a) => {
      console.log(a);
    });
  }

  davinci(x:string):any {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.OPENAI_API_KEY);
    const body = {
      "model": "code-davinci-002",
      "prompt": x,
      "max_tokens": 50,
      "temperature": 0
    };

    return this.http.post(
      'https://api.openai.com/v1/completions',
      body,
      { headers }
    );
  }
}
