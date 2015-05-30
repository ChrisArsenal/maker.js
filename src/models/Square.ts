﻿/// <reference path="rectangle.ts" />

module Maker.Models {
    export class Square extends Rectangle {
        constructor(public side: number) {
            super(side, side);
        }
    }
} 