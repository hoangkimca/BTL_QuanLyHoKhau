package com.example.demo.service.impl;

import java.util.Date;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.model.NhanKhau;
import com.example.demo.model.TamVang;
import com.example.demo.payloads.request.TamVangRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.repository.NhanKhauRepository;
import com.example.demo.repository.TamTruRepository;
import com.example.demo.repository.TamVangRepository;
import com.example.demo.service.TamVangService;

public class TamVangServiceImpl implements TamVangService {

  private static final Logger log = LogManager.getLogger(TamVangServiceImpl.class);

  @Autowired
  TamVangRepository tamVangRepository;

  @Autowired
  NhanKhauRepository nhanKhauRepository;

  @Override
  public CommonResponse<Object> themTamVang(TamVangRequest request) {
    // TODO Auto-generated method stub
    CommonResponse<Object> response = new CommonResponse<>();

    Optional<TamVang> tamvang = tamVangRepository.findByMagiaytamvang(request.getMagiaytamvang());

    Optional<NhanKhau> nhankhau = nhanKhauRepository.findByMahokhauAndName(request.getMahokhau(), request.getHoten());

    TamVang _tamVang = new TamVang();

    if(tamvang.isPresent()){
      response.setData(null);
      response.setMesssage(EcodeConstant.EXIST_MSG);
      response.setStatus(EcodeConstant.EXIST);
      return response;
    }else{
      if(nhankhau.isEmpty()){
        response.setData(null);
        response.setMesssage(EcodeConstant.NULL_MSG);
        return response;
      }else{
        _tamVang.setMagiaytamvang(request.getMagiaytamvang());
        _tamVang.setMahokhau(request.getMahokhau());
        _tamVang.setHoten(request.getHoten());
        _tamVang.setTungay(request.getDenngay());
        _tamVang.setDenngay(request.getDenngay());
        _tamVang.setLydo(request.getLydo());
        _tamVang.setNguoithuchien(request.getNguoithuchien());
        _tamVang.setNgaytao(new Date());

        nhankhau.get().setTrangthai("tamvang");
      }
    }

    try {
      tamVangRepository.save(_tamVang);
      nhanKhauRepository.save(nhankhau.get());
    } catch (Exception e) {
      // TODO: handle exception e.printStackTrace();
      log.error("co loi xay ra!" , e);
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);
    }
    log.info("them moi tam vang service end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    return response;
  }
    
}