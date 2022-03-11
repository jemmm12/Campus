package com.ssafy.camping.service.Impl;

import com.ssafy.camping.entity.Camping;
import com.ssafy.camping.entity.Visit;
import com.ssafy.camping.repository.CampingRepository;
import com.ssafy.camping.repository.UserRepository;
import com.ssafy.camping.repository.VisitRepository;
import com.ssafy.camping.service.CampingService;
import com.ssafy.camping.utils.Message;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class CampingServiceImpl implements CampingService {

    private final CampingRepository campingRepository;
    private final VisitRepository visitRepository;

    @Override
    public Map<String, Object> getCampsite(int campingId, String userUid) throws Exception {
        log.debug("CampingService getCampsite call");
        Map<String, Object> resultMap = new HashMap<>();
        
        Optional<Camping> campsite = campingRepository.findById(campingId);
        if(!campsite.isPresent()) { //캠핑장이 존재하지 않을 경우
            resultMap.put("message", Message.NOT_FOUND_CAMPSITE);
            return resultMap;
        }

        //캠핑장 다녀왔는지
        boolean visitCampsite = false; 
        if(userUid!=null) { //userUid 값이 존재한다면 캠핑장 다녀왔는지 확인
            Optional<Visit> visit = visitRepository.findByUserUid(userUid);
            if(visit.isPresent()) //user가 캠핑장에 다녀왔다면
                visitCampsite = true;
        }

        resultMap.put("campsite",campsite.get()); //캠핑장 정보
        resultMap.put("visit",visitCampsite); //방문여부
        resultMap.put("message",Message.FIND_CAMPSITE_SUCCESS);
        return resultMap;
    }
}