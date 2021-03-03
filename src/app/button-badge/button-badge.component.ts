import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { AssetService } from '../asset.service';

@Component({
  selector: 'jp-button-badge',
  templateUrl: './button-badge.component.html',
  styleUrls: ['./button-badge.component.scss']
})
export class ButtonBadgeComponent implements OnInit {

  public readonly mockImageUrl: SafeUrl;
  public readonly productIdentifier: string = "button-badge";

  constructor(private readonly assetService: AssetService) {
    this.mockImageUrl = this.assetService.getFile("/button-badge-tables/button-badge-image-mock.jpg");
  }

  ngOnInit(): void {
  }

}
