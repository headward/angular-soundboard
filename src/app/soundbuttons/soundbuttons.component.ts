import { Component, OnInit, Input } from '@angular/core';
import bdd from '../../assets/bdd.json'
import {Sound} from "../models/sound.model";

@Component({
  selector: 'app-soundbuttons',
  templateUrl: './soundbuttons.component.html',
  styleUrls: ['./soundbuttons.component.scss']
})
export class SoundbuttonsComponent implements OnInit {
  @Input() sound!: Sound

  constructor() { }
  buttons!: Sound[];

  ngOnInit(): void {
    this.buttons = bdd;
  }
  playSound(path:string): void {
    let soundAudio = new Audio()
    soundAudio.src = "../../assets/sounds/"+path;
    soundAudio.load();
    soundAudio.play();
  }
}
