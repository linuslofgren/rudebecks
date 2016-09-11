//
//  LectureTableViewCell.swift
//  SRG
//
//  Created by Linus Löfgren on 2016-09-09.
//  Copyright © 2016 Linus Löfgren. All rights reserved.
//

import UIKit

class LectureTableViewCell: UITableViewCell {
    
    @IBOutlet weak var begin: UILabel!
    @IBOutlet weak var end: UILabel!
    @IBOutlet weak var subject: UILabel!
    @IBOutlet weak var teacher: UILabel!
    @IBOutlet weak var place: UILabel!
    
    var height: CGFloat = 1.0;
    
    var lecture: Lecture! {
        didSet{
            begin.text = String(lecture!.startTime.time)
            end.text = String(lecture!.endTime.time)
            subject.text = lecture!.subject.rawValue
            teacher.text = lecture!.teacher.rawValue
            place.text = String(lecture!.place)
        }
    }
    
    func calcHeight()->CGFloat{
        return CGFloat(((lecture?.endTime.time)! - (lecture?.startTime.time)!) * 100.0)
    }

    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
        
    }

    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
        
    }

}
