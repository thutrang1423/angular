import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import{musics} from './music'
import{ singerOfmusic} from './singer'
import{styleOfmusic} from './style'
import { ThisReceiver } from '@angular/compiler';
import {likeMusics} from './music-like'

@Injectable({
  providedIn: 'root'
})
export class AnalyzeService {

  server = 'http://localhost:3000';


  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //lấy danh sach cac singer
  getSinger(): Observable<singerOfmusic> {
    return this.httpClient.get<singerOfmusic>(this.server + '/musicsOfSinger/')
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  getStyle(): Observable<styleOfmusic> {
    return this.httpClient.get<styleOfmusic>(this.server + '/styleOfmusic/')
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  // lấy danh sách cac music 
  getMusics(): Observable<musics> {
    return this.httpClient.get<musics>(this.server + '/musics/')
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  getLikeMusic(): Observable<likeMusics> {
    return this.httpClient.get<likeMusics>(this.server + '/likeMusics/')
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  // lấy 1 user có id đưa vào
  // getSingerById(id:any): Observable<singerOfmusic> {
  //   return this.httpClient.get<singerOfmusic>(this.server + '/musicsOfSinger/' + id)
  //   .pipe(
  //     retry(1),
  //     catchError(this.httpError)
  //   )
  // }

  // ghi một biến singer lên Observable
  // create(singer:any): Observable<singerOfmusic> {
  //   return this.httpClient.post<singerOfmusic>(this.server + '/musicsOfSinger', JSON.stringify(singer), this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.httpError)
  //   )
  // }

  createLikeMusic(music:any): Observable<likeMusics> {
    return this.httpClient.post<likeMusics>(this.server + '/likeMusics', JSON.stringify(music), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  //cập nhật 1 phần tử có id với dữ liệu "data" mới
  // updateSinger(id:any, data:any): Observable<singerOfmusic> {
  //   return this.httpClient.put<singerOfmusic>(this.server + '/musicsOfSinger/' + id, JSON.stringify(data), this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.httpError)
  //   )
  // }

  //xóa 1 phần tử có id đưa vào
  // deleteSinger(id:any){
  //   return this.httpClient.delete<singerOfmusic>(this.server + '/musicsOfSinger/' + id, this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.httpError)
  //   )
  // }

  deleteLikeMusic(id:any){
    return this.httpClient.delete<likeMusics>(this.server + '/likeMusics/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  // deleteMusic(id:any){
  //   return this.httpClient.delete<musics>(this.server + '/musics/' + id, this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.httpError)
  //   )
  // }

  listMusicBySinger(singerNum:any){
    // console.log(singerNum);
    return this.httpClient.get<musics>(this.server+'/musics?singerNum='+ singerNum)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  listMusicByStyle(styleNum:any){
    // console.log(singerNum);
    return this.httpClient.get<musics>(this.server+'/musics?styleNum='+ styleNum)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }


  //thông báo lỗi
  httpError(error:any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

}
