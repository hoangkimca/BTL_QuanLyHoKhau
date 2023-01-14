package com.example.demo.service.impl;

import java.util.Date;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.model.TamTru;
import com.example.demo.payloads.request.TamTruRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.repository.TamTruRepository;
import com.example.demo.service.TamTruService;

public class TamTruServiceImpl implements TamTruService {

  private static final Logger log = LogManager.getLogger(TamTruServiceImpl.class);

  @Autowired
  TamTruRepository tamTruRepository;

  @Override
  public CommonResponse<Object> themTamTru(TamTruRequest request) {
    // TODO Auto-generated method stub
    CommonResponse<Object> response = new CommonResponse<>();

    Optional<TamTru> tamtru = tamTruRepository.findByMagiaytamtru(request.getMagiaytamtru());
    TamTru _tamTru = new TamTru();

    if(tamtru.isPresent()){
      response.setData(null);
      response.setMesssage(EcodeConstant.EXIST_MSG);
      response.setStatus(EcodeConstant.EXIST);
      return response;
    }
    else{
      _tamTru.setMagiaytamtru(request.getMagiaytamtru());
      _tamTru.setHoten(request.getHoten());
      _tamTru.setNgaysinh(request.getNgaysinh());
      _tamTru.setGioitinh(request.getGioitinh());
      _tamTru.setNguyenquan(request.getNguyenquan());
      _tamTru.setDantoc(request.getDantoc());
      _tamTru.setCccd(request.getCccd());
      _tamTru.setNghenghiep(request.getNghenghiep());
      _tamTru.setNoitamtru(request.getNoitamtru());
      _tamTru.setTungay(request.getTungay());
      _tamTru.setDenngay(request.getDenngay());
      _tamTru.setLydo(request.getLydo());
      _tamTru.setNguoithuchien(request.getNguoithuchien());
      _tamTru.setNgaytao(new Date());
    }

    try {
      tamTruRepository.save(_tamTru);
      log.info("Save response {}", _tamTru.getId());
      response.setData(_tamTru);
    } catch (Exception e) {
      // TODO: handle exception e.printStackTrace();
       log.error("co loi xay ra!" , e);
       response.setData(null);
       response.setMesssage(EcodeConstant.ERR_MSG);
       response.setStatus(EcodeConstant.ERR);
    }
    log.info("them moi tam tru service end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    return response;
  }
  
    
}