import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public infoHeader: string = "";
  public infoBody:string = "Select a request to learn more.";
  public infoFooter: string = "";
  public showButton: boolean = false;
  public cRequest: string = "";
  constructor() { }
  ngOnInit() {
  }
  
  revealButton(){
	this.showButton = true;
  }
  
  setInfo1(){
	this.infoHeader = "Official Transcript";
	this.infoBody= "An official Ryerson transcript is a complete record of a student's enrollment at Ryerson University including all undergraduate, graduate and continuing education courses, as well as credits granted towards your program.";
	this.infoFooter = "The cost per transcript is $15 (If Fax, charge not included). To order transcripts via RAMSS, you must have a valid Visa, MasterCard or AMEX.";
	this.cRequest = "Official Transcript";
  }
  
  setInfo2(){
	this.infoHeader = "Proof of Enrolment Letter - Verifies that you are currently or were previously enrolled in a program.";
	this.infoBody = "This letter can be used for RESP purposes. \n\
				Confirm a Current Student – confirms your enrolment status for the current term or academic year. If you are currently enrolled in courses for the Fall term only, your enrolment will only be confirmed for the Fall. For degree program students, we will confirm enrolment in course intentions if available on your Ryerson record.\
				Confirm you were enrolled at Ryerson – this confirms you were previously a student at Ryerson, program or courses and years of attendance.";
    this.infoFooter = "Charge per Letter: $20 per letter, additional copies $5";
	this.cRequest = "Proof of Enrolment";
  }
  
  setInfo3(){
	this.infoHeader = "Confirmation of Graduation Status Letter - Verifies that you have officially graduated including year of graduation, degree/diploma/certificate and program. ";
	this.infoBody = "-";
	this.infoFooter = "Charge per Letter: Free of charge";
	this.cRequest = "Confirmation of Graduation Status Letter";
  }
  
  setInfo4(){
	this.infoHeader = "Eligibility to Graduate Letter - Verifies that you have met all of your graduation requirements for your program although you have not yet officially graduated.";
	this.infoBody = "You should be in your final year/semester of study, have applied/will be applying to graduate. ";
	this.infoFooter = "Charge per Letter: $20 per letter, additional copies $5";
	this.cRequest = "Eligibility to Graduate Letter";
  }
  
  setInfo5(){
	this.infoHeader = "Jury Duty Letter - Current students must login to their Student Center via RAMSS to request a letter verifying student status, for exemption from Jury Duty. "
	this.infoBody = "-";
	this.infoFooter = "Charge per Letter: Free of charge";
	this.cRequest = "Jury Duty Letter";
  }

  setInfo6(){
	this.infoHeader = "Transfer Credit Equivalency Letter - Identifies course(s) from other institutions that were used to grant credit towards a Ryerson program or certificate.";
	this.infoBody = "Note: request this letter if you were a Direct Entry transfer student from a college. This type of 'block' transfer credit does not show on your official transcript. Other transfer credit does. ";
	this.infoFooter = "Charge per Letter: $20 per letter, additional copies $5";
	this.cRequest = "Transfer Credit Equivalency Letter";
  }
  
  openRequestModal(){
	$.ajax({
		method: 'POST',
		url: '/loadRequests',
		data: JSON.stringify({type: this.cRequest}),
		contentType: 'application/json',
		success: function(data) {
			console.log(data);
		}
	})
	$('#reqModal').modal('show'); 
  }
  
  sendRequest(){
	$.ajax({
		method: 'POST',
		url: '/Request',
		data: JSON.stringify({type: this.cRequest}),
		contentType: 'application/json',
		success: function(data) {
			console.log("success");
		}
	})
  }
}
