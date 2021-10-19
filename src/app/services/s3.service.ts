import { Injectable } from '@angular/core';
import * as aws from 'aws-sdk'
@Injectable({
  providedIn: 'root'
})
export class S3Service {
  awsCredentials ={
    accessKeyId:'AKIAQAVQA6VNSP724ERU',
    secretAccessKey:'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'
    
  };

  constructor() { }


  getURLPresignaded(imageName){

    let  s3=new aws.S3()
  
    s3.config.update(this.awsCredentials)
    s3.config.update({region:'us-east-1'})
  
    //const bucketName ='fotos-implementta-movil'
    const bucketName ='photos-implementta'
    const key = imageName
    const signedUrlExpireSeconds = 30000000*10
  
    const url = s3.getSignedUrl('getObject', {
      Bucket: bucketName,
      Key: key,
      Expires: signedUrlExpireSeconds
  })
  return url
  
     }



}
