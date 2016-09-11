//
//  Lecture.swift
//  SRG
//
//  Created by Linus Löfgren on 2016-09-11.
//  Copyright © 2016 Linus Löfgren. All rights reserved.
//

import Foundation

class Lecture {
    
    var startTime : Clock
    var endTime   : Clock
    var teacher   : Teacher
    var subject   : Subject
    var place     : Float
    
    init (startTime: Clock, endTime: Clock, teacher: Teacher, subject: Subject, place: Float){
        self.startTime = startTime
        self.endTime   = endTime
        self.teacher   = teacher
        self.subject   = subject
        self.place     = place
    }
}