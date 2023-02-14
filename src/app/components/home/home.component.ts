import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Openai1Service } from 'src/app/services/openai1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  promptForm = new UntypedFormGroup({
    prompt: new UntypedFormControl('',Validators.required)
  });

  constructor(private fb:FormBuilder,private ai:Openai1Service) { }

  ngOnInit(): void {
    //this.ai.call();
  }




  public prompts:string[]=[];
  public answers:string[]=[];

  newPrompt(){
    this.prompts.push(this.promptForm.value.prompt);
    
    this.answers.push("Answer for "+this.promptForm.value.prompt);
    this.promptForm.patchValue({prompt:''});
  }

}
