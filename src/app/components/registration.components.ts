import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
    selector: 'registration-ui',
    styleUrls: ['../styles/registration.styles.css'],
    template: `
       <div style="padding:30%;" >
       

    
       <mat-card class="example-card">
        
                     <mat-card-title style="text-align: center; padding: 1em">Register here</mat-card-title>
                   
        
                       
                           <mat-card-content style="text-align:center">




                               <p>
                                    <mat-form-field appearance="standard" >
                                    <mat-label>Enter Your Firstname</mat-label>
                                    <input matInput placeholder="Firstname">
                                    <mat-hint></mat-hint>
                                  </mat-form-field>
                                </p>

                                <p>
                                <mat-form-field appearance="standard">
                                <mat-label>Enter Your Lastname</mat-label>
                                <input matInput placeholder="Lastname">
                                <mat-hint></mat-hint>
                              </mat-form-field>
                            </p>

                                <mat-form-field class="example-full-width">
                                   <mat-label>Email</mat-label>
                                    <input matInput [formControl]="emailFormControl" placeholder="Ex. pat@example.com">
                                   <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
                                      Please enter a valid email address
                                   </mat-error>
                                        <mat-error *ngIf="emailFormControl.hasError('required')">
                                             Email is <strong>required</strong>
                                        </mat-error>
                                 </mat-form-field>

                                 <mat-form-field class="example-full-width">
                            <mat-label>Telephone</mat-label>
                            <span matPrefix>+1 &nbsp;</span>
                            <input type="tel" matInput placeholder="555-555-1234">
                            <mat-icon matSuffix>mode_edit</mat-icon>
                          </mat-form-field>

                          <mat-card-actions>
                              <button mat-flat-button color="accent" style="margin-top: 1em; margin-bottom: 2em;">Accent</button>
                              </mat-card-actions>
      
                           </mat-card-content>
                              
       </mat-card>
    </div>
    `})
    export class RegistrationTemplete {
        emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
          ]);
        
    } 

    