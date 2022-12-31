//
//  LooksCameraManager.swift
//  Looks
//
//  Created by Dileepa Chandima on 2022-12-31.
//

import Foundation
import UIKit

@objc(LooksCameraManager)
class LooksCameraManager: RCTViewManager {
  
  private var looksCamera = LooksCamera()
  
  override func view() -> UIView {
    return looksCamera;
  }
  
  @objc func takePhoto(){
    looksCamera.takePhoto()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}

