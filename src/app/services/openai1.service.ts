import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Openai1Service {
  OPENAI_API_KEY = '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';

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

  davinci() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.OPENAI_API_KEY);
    const body = {
      model: 'code-davici-002',
      prompt: 'Hello world',
      max_tokens: 5,
      temperature: 0.5,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    return this.http.post(
      'https://api.openai.com/v1/engine/davinci-codex/completions',
      body,
      { headers }
    );
  }
}
