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
    
    var height = 0.0;
    
    var data: [AnyObject]? {
        didSet{
            begin.text = String(data![0] as! Float)
            end.text = String(data![1] as! Float)
            subject.text = String(data![2] as! String)
            teacher.text = String(data![3] as! String)
            place.text = String(data![4] as! Int)
            height = data![1] as! Float - data![0] as! Float
        }
    }
    
    func calcHeight()->CGFloat{
        return height*100
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
