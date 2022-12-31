//
//  LooksCameraManager.m
//  Looks
//
//  Created by Dileepa Chandima on 2022-12-31.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(LooksCameraManager, RCTViewManager)

RCT_EXTERN_METHOD(takePhoto)
RCT_EXPORT_VIEW_PROPERTY(onResultImageExported, RCTBubblingEventBlock)

@end
