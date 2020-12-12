import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestApiService } from './rest-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
	exports: [ReactiveFormsModule],
	providers: [RestApiService],
})
export class SharedAuthModule {}
