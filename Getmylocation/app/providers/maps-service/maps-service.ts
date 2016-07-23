import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
declare var google:any;

/*
  Generated class for the MapsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MapsService {


  /**
  * Create a map
  */
    
public getMap(elementId: string):any{
        return new google.maps.Map(document.getElementById(elementId),{
            zoom:12,
            center: this._getLatLng(19.066789, 72.998733),
            mapTypeId:google.maps.MapTypeId.ROADMAP
        });
    }
 /**
  * Move to position
  */
  public moveToPosition(map:any, latitude: number, longitude: number):void{
    let center = this._getLatLng(latitude, longitude);
    map.setCenter(center);
    this._addMarker(center, map);
  }

  /**
  * Get address from position
  */
  public getAddress(latitude: number, longitude: number):Promise<any>{
    let center = this._getLatLng(latitude, longitude);
    return new Promise(function(resolve, reject){
      new google.maps.Geocoder().geocode({'location':center}, function(results, status){
        if(status === google.maps.GeocoderStatus.OK){
          resolve(results);
        }else{
          reject(status);
        }
      });
    });
  }

  /**
  * Add a marker on map
  */
  public _addMarker(position:any, map:any):void{
    let marker = new google.maps.Marker({
        draggable:true,
        position:position,
        title:'Location',
        animation: google.maps.Animation.DROP
    });
 
      let usermaker:any;
      usermaker= marker.setMap(map);
      console.log(usermaker);
      marker.addListener('dragend',function(event) {
        //console.log(event.latLng.lat().toFixed(3));
        // this.getAddress(event.latLng.lat().toFixed(3),event.latLng.lng().toFixed(3));
        //let draggedposi: any[] = [];

        //draggedposi['lat'] = event.latLng.lat().toFixed(3);
        //draggedposi['lng'] = event.latLng.lng().toFixed(3);
        //public draggedposi=[event.latLng.lat().toFixed(3),event.latLng.lng().toFixed(3)];
        // console.log(draggedposi['lat']);
        let lat :any;
        let lng :any;
        let latlng :any;
        lat= event.latLng.lat().toFixed(3);
        lng =event.latLng.lng().toFixed(3);
        latlng = new google.maps.LatLng(lat, lng);
        console.log(latlng);

        //this._getAdressFromLatLng(draggedposi);
      });
  }
    
  public _getAdressFromLatLng(pos){
    console.log(pos.lat()); 
  }  

    
/*google.maps.event.addListener(marker, 'dragend', function() 
{
    geocodePosition(marker.getPosition());
});*/

/*public geocodePosition(pos) 
{
   geocoder = new google.maps.Geocoder();
   geocoder.geocode
    ({
        latLng: pos
    }, 
        function(results, status) 
        {
            if (status == google.maps.GeocoderStatus.OK) 
            {
                $("#mapSearchInput").val(results[0].formatted_address);
                $("#mapErrorMsg").hide(100);
            } 
            else 
            {
                $("#mapErrorMsg").html('Cannot determine address at this location.'+status).show(100);
            }
        }
    );
}*/
  /**
  * Generate LatLng
  */
  private _getLatLng(latitude:number, longitude:number):any{
    return new google.maps.LatLng(latitude, longitude);
  }
}
