//
//  Time.swift
//  SRG
//
//  Created by Linus Löfgren on 2016-09-11.
//  Copyright © 2016 Linus Löfgren. All rights reserved.
//

import Foundation

struct Time24h{
    var hours: Int
    var minutes: Int
    init(hours: Int, minutes: Int){
        self.hours = hours
        self.minutes = minutes
    }
}

struct Clock{
    var time24: Time24h
    init (time: Float){
        self.time24 = Time24h(hours: Int(floor(time)), minutes: Int(floor(100 * (time - floor(time)))))
    }
    var time: Float {
        get{
            return Float(time24.hours) + Float(time24.minutes) / 100
        }
        set(newTime){
            self.time24.hours = Int(floor(time))
            self.time24.minutes = Int(floor(100 * (time - floor(time))))
        }
    }
}